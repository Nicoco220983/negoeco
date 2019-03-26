require("@mysimpleapp/msa-app/params")

const MsaApp = require("@mysimpleapp/msa-app/module")
const NegoEco = class extends MsaApp {}
const NegoEcoPt = NegoEco.prototype

NegoEcoPt.getTemplateSrc = function(){
	return join(__dirname, 'templates/index.html')
}

// utils

const { join } = require('path')

module.exports = new NegoEco()
