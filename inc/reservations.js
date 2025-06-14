var conn = require('./db')
module.exports = {
    render(req, res, error, success) {
        res.render('contacts', {
            title: 'Contato - Restaurante Saboroso!',
            background: "images/img_bg_3.jpg",
            h1: "Diga um oi!",
            isHome: false
        })
    },

    save(fields) {
        return new Promise((resolve, reject) => {
            let date = fields.date.split('/')
            fields.date = `${date[2]}-${date[1]}-${date[0]}`
            conn.query(`
                INSERT INTO tb_reservations (name,email,people,date,time) VALUES(?,?,?,?,?)
            `, [
                fields.name,
                fields.email,
                fields.people,
                fields.date,
                fields.time
            ], (err, results) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        })
    }
}