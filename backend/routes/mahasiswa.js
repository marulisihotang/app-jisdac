var express = require('express');
var router = express.Router();
const { Mahasiswa } = require("../db/models");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('satuuuu');
// });

// GET
router.get("/", async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll();
        return res.json({
        status: 200,
        message: "Berhasil mengambil semua data",
        data: mahasiswa,
        });
    } catch (error) {
        console.error("Error fetching mahasiswa:", error);
        return res.status(500).json({
        status: 500,
        message: "Terjadi kesalahan saat mengambil data",
        error: error.message,
        });
    }
});

module.exports = router;