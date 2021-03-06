const chalk = require('chalk')
const custom = require('../customcolors')
const args = custom.colorArgs
module.exports = {
    logOptions: function(obj){
        return(
                `
                    ${chalk.green('Category:')} ${obj.category}
                    ${chalk.green('Name:')} ${obj.name + '\n'}
                    * Type: ${args(obj.type)}
                    ${obj.read ? `* ${chalk.bold(obj.read)}`: ''}
                    ${obj.def ? `* Default: ${args(obj.def)}` : ``}
                    ${obj.restrictions ? `* Restrictions: ${obj.restrictions}` : ''}
                    * Details: ${obj.details}
                    ${obj.example ? `* Example: ${obj.example}` : ''} 
                `
        )
    }
}