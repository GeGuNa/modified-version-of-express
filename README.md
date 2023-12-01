modified version of express js


In this modified version of express you dont need to parse  cookies everytime with cookie-parser in your every project  just use this modified version  


i have did this because everytime i see new version of express comes out  it lacks cookie parsing and its really annoying ... 



app.get("/", (req,res) => {
	res.cookie("namq","val", {expires: expiryDate});
	res.write(`main`)

	var qq = req.cookie("nqamq");

	console.log(qq)
	res.end()
})




just a little bit example  here 

to  parse cookies   with this   you just  need   req.cookie("name_of_cookie") 

if there's cookie  with the following name  it will parse the value  if not  it will  return  false     ...   


`
Also i'll be adding  in this modified  version  file uploading  soon ...  since not everyone loves to parse and load external libraries always...  its boring and annoying  (i think XD)
`
