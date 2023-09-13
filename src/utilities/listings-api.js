import sendRequest from "./send-request";
const BASE_URL = '/api/listings';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function addListing(listingData) {
  return sendRequest(BASE_URL, 'POST', listingData);
}

export function removeListing(listingData) {

}

export function updateListing(listingData) {
  return sendRequest(`BASE_URL/${id}`, 'PUT', listingData);
}