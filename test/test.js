var assert = require('assert');
describe('Get a course', function(){
var course;
fetch("https://syntaxmapfrontmain.herokuapp.com/" + "PRESENT SIMPLE").then(res =>res.json())
.then((res) => {course = res[0].course_title});
    it('should work', function(){
        assert.equal(course, "PRESENT SIMPLE");
    });
});
