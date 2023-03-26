const controller ={}

controller.list =(req, res)=>{
     req.getConnection((err,conn)=>{
        conn.query("SELECT * FROM customer;",(err,rows)=>{
            if(err) {
                res.json(err);
            }
            console.log(rows)
            let i=1;
             res.render('customers', {
                data: rows,
                cont: i

             })
        })
    })
}
controller.save =(req,res)=>{
    const data= req.body;
    req.getConnection((err,conn)=>{
        if(err){
            console.log(err);
        }else{
            conn.query('INSERT INTO customer  set ?',[data],(err,rows)=>{
                if(err){
                    console.log(err)
                }else{
                   res.redirect('/');
                }
            });
    
        }
    })
}

controller.edit =(req,res)=>{
    const {id} = req.params;
   req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM customer WHERE id=?',[id],(err,rows)=>{
        res.render('customer_edit',{
            data: rows[0]
        })
    })
   }) 
}

controller.update = (req,res)=>{
    const  {id}= req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE customer set ?   WHERE id=?',[newCustomer,id],(err,rows)=>{
            res.redirect('/')
        });
    })
}
controller.delete =(req,res)=>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query("DELETE FROM customer  WHERE id=?",id,(err,rows)=>{
            res.redirect('/'); 
        })
    })
}

module.exports= controller;