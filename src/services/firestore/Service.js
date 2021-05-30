import firebase from "../Firebase";

export default class Service {

  constructor(collectionName) {
    this.db = firebase.firestore();
    this.collectionName = collectionName;
  }

  unsubscribe(dbRef) {
    dbRef();
  }

  collection(queries) {
    return this.getWhereReference(this.db.collection(this.collectionName), queries);
  }

  doc(docName, queries) {
    return this.getWhereReference(this.db.collection(this.collectionName).doc(docName), queries);
  }

  duplicate(entity) {
    return entity;
  }

  create(entity, id=null) {
    console.debug(`[Service.${this.collectionName}.create]`, entity);
    if(id) {
      entity.id = id;
       return this.collection().doc(id).set(entity).then(() => this.duplicate(entity))
    }
    return this.collection().add(entity).then((docRef) => {
      entity.id = docRef.id;
      return this.duplicate(entity)
    })
  }

  liveRead(id, callback, queries) {
    console.debug(`[Service.${this.collectionName}.liveRead.${id}]`, queries ? queries.map(query => query.join(' ')) : '');
    return this.doc(id, queries).onSnapshot((snapshot) => callback(snapshot.data()));
  }

  read(id, callback, queries, live=true) {
    if(live){
      this.liveRead(id, callback, queries);
    } else {
      console.debug(`[Service.${this.collectionName}.read.${id}]`, queries ? queries.map(query => query.join(' ')) : '');
      return this.doc(id, queries).get().then(doc => doc.data());
    }
  }

  update(id, data, queries){
    console.debug(`[Service.${this.collectionName}.update.${id}]`, data, queries ? queries.map(query => query.join(' ')) : '');
    return this.doc(id, queries).update(data).then(() => {
      return this.duplicate(data);
    });
  }

  delete(id, queries) {
    console.debug(`[Service.${this.collectionName}.delete.${id}]`, queries ? queries.map(query => query.join(' ')) : '');
    return this.doc(id, queries).delete()
  }

  liveList(callback, queries) {
    console.debug(`[Service.${this.collectionName}.liveList]`, queries ? queries.map(query => query.join(' ')) : '');
    return this.collection(queries).onSnapshot((snapshot) =>  {
      const docs = [];
      snapshot.forEach(doc => {
        const entity = doc.data();
        entity.id = doc.id;
        docs.push(entity)
      });
      callback(docs)
    });
  }

  list(callback, queries, live = true) {
    if(live){
      return this.liveList(callback, queries);
    } else {
      console.debug(`[Service.${this.collectionName}.list]`, queries ? queries.map(query => query.join(' ')) : '');
      return this.collection(queries).get().then(docs => {
        const entities = [];
        docs.forEach(doc => {
          const entity = doc.data();
          entity.id = doc.id;
          entities.push(entity)
        });
        return entities;
      });
    }
  }

  getWhereReference(ref, queries) {
    if(!queries) {
      return ref;
    }

    let newRef = ref;
    queries.forEach(query => {
      if(query.length === 3) {
        newRef = newRef.where(query[0], query[1], query[2])
      }
    });
    return newRef;
  }

}