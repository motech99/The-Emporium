import sendRequest from "./send-request";
const BASE_URL = '/api/listings';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getListingByCategory() {
  return sendRequest(`BASE_URL`)
}

export function getById(_id) {
  return sendRequest(`${BASE_URL}/${_id}`);
}

export function addListing(listingData) {
  return sendRequest(BASE_URL, 'POST', listingData);
}

export function deleteListing(listingId) {
  return sendRequest(`${BASE_URL}/${listingId}`, 'DELETE');
}

export function editListing(listingData, id) {
  return sendRequest(`BASE_URL/${id}`, 'PUT', listingData);
}