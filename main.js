const express = require("express")
const app = express()

let porT1 = 8000;

const expiryDate = new Date(Date.now() + (60 * 60 * 24 * 30 * 12) * 1000)

app.get("/", (req,res) => {
	
	res.cookie("namq","val", {expires: expiryDate});
	res.write(`main`)

	var qq = req.cookie("nqamq");

	console.log(qq)
	res.end()
})


app.get("*", (req,res) => {

	res.write(`error`)
	
	res.end()
})


app.listen(porT1, () => {
	console.log(`yeah  works at ${porT1}`)
});
