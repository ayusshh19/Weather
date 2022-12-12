import express from 'express'
import path, { dirname } from 'path'
import hbs from 'hbs'
const app =express()
const port = process.env.PORT || 8000
const staticfolder=path.resolve(dirname(''),'\public')
// console.log(staticfolder)
const templates=path.resolve(dirname(''),'templates/views')
const partialspath=path.resolve(dirname(''),'templates/partials')
// console.log(partialspath)
// console.log(templates)


app.set('view engine','hbs')
app.set('views',templates)
hbs.registerPartials(partialspath)


app.use(express.static(staticfolder))

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/weather',(req,res)=>{
    res.render('temp')
})
app.get('*',(req,res)=>{
    res.render('404error')
})
app.listen(port,()=>{
    console.log(`listening to port number ${port}`)
})