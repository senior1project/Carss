const mysql = require('mysql2'); 

const connection = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'eyajouini',
    database: 'Rental_cars'
});

connection.connect((err) => { 
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

const createUser = (username, Pass, callback) => { 
    const sql = 'INSERT INTO users SET ?';
    connection.query(sql, { username: username, password: Pass }, (err, results) => {
        callback(err, results);
    });
};

const findUser = (username, callback) => { 
    const sql = 'SELECT * FROM users WHERE username = ?';
    connection.query(sql, [username], (err, results) => {
        callback(err, results);
    });
};

const findAll= (callback)=>{
    const sql ='SELECT * FROM  VEHICLE'
    connection.query(sql,(err, results) => {
        callback(err, results)
    })
} 


const findCar= (brand,callback) => { 
        const sql = 'SELECT * FROM vehicle WHERE brand = ?';
        connection.query(sql, [brand], (err, results) => {
            callback(err, results);
        });
}


const findByid= (id,callback) => { 
    const sql = 'SELECT * FROM vehicle WHERE id = ?';
    connection.query(sql, [id], (err, results) => {
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



const rentCar = (val,callback)=>{
    const sql = 'INSERT INTO  rental SET  ?'
    connection .query(sql,[val],(err, results) => {
        callback(err, results)})

}
const Allrents= (callback)=>{
    const sql = 'SELECT * FROM rental '
    connection .query(sql,(err, results) => {
        callback(err, results)})

}


module.exports={ findUser,createUser,connection,deleteCar,findCar,updateCar,addCar,findAll,findByid,rentCar,Allrents}