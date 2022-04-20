const multer = require('multer')
const upload = multer({dest: 'tmp/csv/'});
module.exports = upload;