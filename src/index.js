// This file allows us to describe each protocols controller methods in their
// own module.
const request = require('popsicle')

function list_samples(connection, callback) {
  // sample_ids
  return request.get({url: URL + "/list_samples"})
      .use(request.plugins.parse('json'))
      .then(callback);
}

function list_features(connection, callback) {
  // feature_ids
  return request.get({url: connection + "/list_features"})
    .use(request.plugins.parse('json'))
    .then(callback);;
}

function matrix(connection, sample_ids, feature_ids, callback) {
  var payload = {sample_ids: sample_ids, feature_ids: feature_ids};
  // matrix
  return request.post(
    {url: connection + "/matrix",json: true, body: payload})
      .use(request.plugins.parse('json'))
      .then(callback);;
}

function sparse_matrix(connection, sample_ids, feature_ids, callback) {
  var payload = {sample_ids: sample_ids, feature_ids: feature_ids};
  // matrix
  return request.post(
    {url: connection + "/matrix/sparse",json: true, body: payload})
      .use(request.plugins.parse('json'))
      .then(callback);;
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
