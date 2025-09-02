var express = require('express');
var router = express.Router();
const { Mahasiswa } = require("../db/models");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('satuuuu');
// });

// GET
router.get("/", async (req, res) => {
    const mahasiswa = await Mahasiswa.findAll();
    return res.json({
        status: 200,
        message: "Berhasil mengambil semua data",
        data: mahasiswa,
    });
});

module.exports = router;