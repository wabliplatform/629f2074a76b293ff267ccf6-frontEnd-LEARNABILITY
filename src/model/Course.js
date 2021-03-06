/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CourseCourseImage from './CourseCourseImage';

/**
 * The Course model module.
 * @module model/Course
 * @version 1.0.0
 */
class Course {
    /**
     * Constructs a new <code>Course</code>.
     * @alias module:model/Course
     * @param courseTitle {String} 
     * @param courseImage {module:model/CourseCourseImage} 
     * @param courseDescription {String} 
     * @param courseDate {String} 
     */
    constructor(courseTitle, courseImage, courseDescription, courseDate) { 
        
        Course.initialize(this, courseTitle, courseImage, courseDescription, courseDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, courseTitle, courseImage, courseDescription, courseDate) { 
        obj['courseTitle'] = courseTitle;
        obj['courseImage'] = courseImage;
        obj['courseDescription'] = courseDescription;
        obj['courseDate'] = courseDate;
    }

    /**
     * Constructs a <code>Course</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Course} obj Optional instance to populate.
     * @return {module:model/Course} The populated <code>Course</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Course();

            if (data.hasOwnProperty('_id')) {
                obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
            }
            if (data.hasOwnProperty('courseTitle')) {
                obj['courseTitle'] = ApiClient.convertToType(data['courseTitle'], 'String');
            }
            if (data.hasOwnProperty('courseImage')) {
                obj['courseImage'] = CourseCourseImage.constructFromObject(data['courseImage']);
            }
            if (data.hasOwnProperty('courseDescription')) {
                obj['courseDescription'] = ApiClient.convertToType(data['courseDescription'], 'String');
            }
            if (data.hasOwnProperty('courseDate')) {
                obj['courseDate'] = ApiClient.convertToType(data['courseDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} _id
 */
Course.prototype['_id'] = undefined;

/**
 * @member {String} courseTitle
 */
Course.prototype['courseTitle'] = undefined;

/**
 * @member {module:model/CourseCourseImage} courseImage
 */
Course.prototype['courseImage'] = undefined;

/**
 * @member {String} courseDescription
 */
Course.prototype['courseDescription'] = undefined;

/**
 * @member {String} courseDate
 */
Course.prototype['courseDate'] = undefined;






export default Course;

