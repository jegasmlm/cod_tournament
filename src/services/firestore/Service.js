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

  create(entity) {
    console.debug(`[Service.${this.collectionName}.create]`, entity);
    return this.collection().add(entity).then((docRef) => {
      entity.id = docRef.id;
      return this.duplicate(entity)
    })
  }

  liveRead(id, callback, queries) {
    console.debug(`[Service.${this.collectionName}.liveRead.${id}]`, queries.map(query => query.join(' ')));
    return this.doc(id, queries).onSnapshot((snapshot) => callback(snapshot.data()));
  }

  read(id, callback, queries, live=true) {
    if(live){
      this.liveRead(id, callback, queries);
    } else {
      console.debug(`[Service.${this.collectionName}.read.${id}]`, queries.map(query => query.join(' ')));
      return this.doc(id, queries).get().then(doc => doc.data());
    }
  }

  update(id, data, queries){
    console.debug(`[Service.${this.collectionName}.update.${id}]`, data, queries.map(query => query.join(' ')));
    return this.doc(id, queries).update(data).then(() => {
      return this.duplicate(data);
    });
  }

  delete(id, queries) {
    console.debug(`[Service.${this.collectionName}.delete.${id}]`, queries.map(query => query.join(' ')));
    return this.doc(id, queries).delete()
  }

  liveList(callback, queries) {
    console.debug(`[Service.${this.collectionName}.liveList]`, queries.map(query => query.join(' ')));
    return this.collection(queries).onSnapshot((snapshot) =>  {
      const docs = [];
      snapshot.forEach(doc => docs.push(doc.data()));
      callback(docs)
    });
  }

  list(callback, queries, live = true) {
    if(live){
      return this.liveList(callback, queries);
    } else {
      console.debug(`[Service.${this.collectionName}.list]`, queries.map(query => query.join(' ')));
      return this.collection(queries).get().then(docs => {
        const entities = [];
        docs.forEach(doc => {
          entities.push(doc.data);
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