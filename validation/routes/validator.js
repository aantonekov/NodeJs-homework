const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });


const validation = (req, res, next) => {
    const schema = {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "surname": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "pattern": "^\\S+@\\S+\\.\\S+$",
            "minLength": 6,
            "maxLength": 127
          },
          "gender": {
            "type": "string"
          },
          "ipAdress": {
            "type": "string",
            "pattern": "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
          }
        }
        
      }
    const validate = ajv.compile(schema)
    const valid = validate(req.body)
    console.log(valid);
    if(!valid) {
        console.log(validate.errors);

        const arrError = validate.errors.map(el => {
            return el.instancePath;
        });

        const uniqArrError = Array.from(new Set(arrError));
        console.log(uniqArrError);
        
        res.send(uniqArrError);
    }else {
        next()
    };
    
}

module.exports = {
    validation
}