import sendRequest from "./send-request";
const BASE_URL = '/api/listings';

export function addBid(listingId, bidData) {
    return sendRequest(`${BASE_URL}/${listingId}/bids`, 'POST', bidData);
}
  
export function removeBid(listingId, bidId) {
    return sendRequest(`${BASE_URL}/${listingId}/bids/${bidId}`, 'DELETE');
}