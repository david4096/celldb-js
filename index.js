// This file allows us to describe each protocols controller methods in their
// own module.
var request = require('request');

var URL = "http://localhost:8080";

function list_samples(connection, callback) {
  // sample_ids
  return request.get(URL + "/list_samples", callback);
}

function list_features(connection, callback) {
  // feature_ids
  return request.get(URL + "/list_features", callback);
}

function matrix(connection, sample_ids, feature_ids, callback) {
  var payload = {sample_ids: sample_ids, feature_ids: feature_ids};
  // matrix
  return request.post(
    {url: URL + "/matrix",json: true, body: payload}, callback);
}

function sparse_matrix(connection, sample_ids, feature_ids, callback) {
  var payload = {sample_ids: sample_ids, feature_ids: feature_ids};
  // matrix
  return request.post(
    {url: URL + "/matrix/sparse",json: true, body: payload}, callback);
}

function sparse_to_dense(sparse, dense) {
  // TODO
}

module.exports = {
  list_features: list_features,
  list_samples: list_samples,
  matrix: matrix,
  sparse_matrix: sparse_matrix
}
