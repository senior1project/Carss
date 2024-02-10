const mysql = require('mysql2'); 

const connection = mysql.createConnection({ 
    host:'localhost',
    user:'root',
    password:'choclata',
    database:'Rental_cars'
});

connection.connect((err)=>{
    err?console.log(err):console.log("database Connected")
  })


const createUser = (username, Pass, callback) => { 
    const sql = 'INSERT INTO users SET ?'
    connection.query(sql, {username: username, password: Pass }, (err,results)=>{
        callback(err, results)
    })
};

const findUser = (username, callback) => { 
    const sql = 'SELECT * FROM users WHERE username = ?';
    connection.query(sql, [username], (err, results) => {
        callback(err, results);
    });
};

const findAll= (callback)=>{
    const sql ='SELECT * FROM vehicle'
    connection.query(sql,(err, results) => {
        callback(err, results)
    })
} 

const findCarById = (id, callback) => { 
    const sql = 'SELECT * FROM vehicle WHERE id = ?';
    connection.query(sql, [id], (err, results) => {
        callback(err, results);
    });
}


const findCar= (brand,callback) => { 
        const sql = 'SELECT * FROM vehicle WHERE brand = ?';
        connection.query(sql, [brand], (err, results) => {
            callback(err, results);
        });
}

const addCar = (val,callback)=>{
    const sql = 'INSERT INTO  vehicle SET  ?'
    connection .query(sql,[val],(err, results) => {
        callback(err, results)})

}

const updateCar = (val,id,callback)=>{
    const sql = 'UPDATE vehicle SET ?  WHERE id = ? '
    connection .query(sql,[val,id],(err, results) => {
        callback(err, results)})

}

const deleteCar = (id,callback)=>{
    const sql='DELETE  FROM  vehicle WHERE id = ?'
    connection .query (sql,[id],(err, results) => {
        callback(err, results)})
}

const reservation=(val,callback)=>{
    const sql = 'INSERT INTO rental SET ?'
    connection.query(sql,[val],(err, results) => {
        callback(err, results)})
}

const updateReservation =(val,id,callback)=>{
    const sql = 'UPDATE rental SET ?  WHERE id = ? '
    connection .query(sql,[val,id],(err, results) => {
        callback(err, results)})
}

const deleteReservation =(id,callback)=>{
    const sql='DELETE  FROM rental WHERE id = ?'
    connection .query (sql,[id],(err, results) => {
        callback(err, results)})
}

module.exports={findUser,createUser,deleteCar,findCar,updateCar,addCar,findAll,findCarById,reservation,updateReservation,deleteReservation}