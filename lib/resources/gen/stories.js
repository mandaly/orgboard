
/**
 * This file is auto-generated by the `asana-api-meta` NodeJS package.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing (like unused requires).
 * TODO: maybe we can just disable those specifically and keep this code
 * pretty lint-free too!
 */
/* jshint ignore:start */
var Resource = require('../resource');
var util = require('util');
var _ = require('lodash');

/**
   * A _story_ represents an activity associated with an object in the Asana
   * system. Stories are generated by the system whenever users take actions such
   * as creating or assigning tasks, or moving tasks between projects. _Comments_
   * are also a form of user-generated story.
   * 
   * Stories are a form of history in the system, and as such they are read-only.
   * Once generated, it is not possible to modify a story.
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Stories(dispatcher) {
  Resource.call(this, dispatcher);
}
util.inherits(Stories, Resource);


/**
   * Returns the full record for a single story.
   * @param {Number} story Globally unique identifier for the team.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The requested resource
 */
Stories.prototype.findById = function(
    story,
    params
) {
  var path = util.format('/stories/%d', story);
  
  return this.dispatchGet(path, params);
};

/**
   * Returns the compact records for all stories on the task.
   * @param {Number} task Globally unique identifier for the task.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The response from the API
 */
Stories.prototype.findByTask = function(
    task,
    params
) {
  var path = util.format('/tasks/%d/stories', task);
  
  return this.dispatchGetCollection(path, params);
};

/**
   * Adds a comment to a task. The comment will be authored by the
   * currently authenticated user, and timestamped when the server receives
   * the request.
   * 
   * Returns the full record for the new story added to the task.
   * @param {Number} task Globally unique identifier for the task.
   * @param {Object} [data] Data for the request
   * @option {String} text The plain text of the comment to add.
   * @return {Promise} The response from the API
 */
Stories.prototype.createOnTask = function(
    task,
    data
) {
  var path = util.format('/tasks/%d/stories', task);
  
  return this.dispatchPost(path, data);
};


module.exports = Stories;
/* jshint ignore:end */