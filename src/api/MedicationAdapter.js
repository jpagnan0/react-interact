const MEDICATION_URL = `http://localhost:3000/api/v1/search?medication_name=`;
//const USER_MEDICATION
export default class MedicationAdapter {
  static getMedicationResults(searchTerm) {
    return fetch(`${MEDICATION_URL}${searchTerm}`)
    .then(res => res.json())
    .then(json => console.log(json))
  }
};
