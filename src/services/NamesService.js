

export default class NamesService {

  async fetchAdjective() {
    return fetch("https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=adjective&excludePartOfSpeech=noun&minCorpusCount=4000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=3qau38zh6aixg8gd1xr6k801vhldnnjrow6p6in5h3pxgeuls").then((response) => {
      return response.json();
    }).then((data) => {
      return data.word;
    });
  }
  
  // noun one kinda sucks because there are too many stupid nouns in the dictionary
  async fetchNoun() {
    return fetch("https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=100000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=3qau38zh6aixg8gd1xr6k801vhldnnjrow6p6in5h3pxgeuls").then((response) => {
      return response.json();
    }).then((data) => {
      return data.word;
    });
  }

  async getName() {
    return await this.fetchNoun() + ' ' +  await this.fetchAdjective() ;
  }

}