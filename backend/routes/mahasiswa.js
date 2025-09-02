var express = require('express');
var router = express.Router();
const Validator = require("fastest-validator");
const v = new Validator();
const { Mahasiswa } = require("../db/models");

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('satuuuu');
// });

// GET ALL
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

// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        let mahasiswa = await Mahasiswa.findByPk(id);
        if (!mahasiswa) {
            return res
                .status(404)
                .json({ status: 404, message: "Data tidak ditemukan" });
        } else {
            return res.json({
                status: 200,
                message: "Data berhasil ditemukan",
                data: mahasiswa,
            });
        }
    } catch (error) {
        console.error("Error fetching mahasiswa:", error);
        return res.status(500).json({
            status: 500,
            message: "Terjadi kesalahan saat mengambil data",
            error: error.message,
        });
    }
});

router.post("/", async (req, res) => {
  // valid
    const schema = {
        nama: "string",
        jurusan: "string",
    };

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json(validate);
    }

  // proses create
    const mahasiswa = await Mahasiswa.create(req.body);
    res.json({
        status: 200,
        message: "Sukses menambahkan data",
        data: mahasiswa,
    });
});

// PUT
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    let mahasiswa = await Mahasiswa.findByPk(id);
    if (!mahasiswa) {
        return res.status(404).json({ status: 404, message: "Data tidak ditemukan!" });
    }
  // valid
    const schema = {
        nama: "string|optional",
        jurusan: "string|optional",
    };

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json(validate);
    }

    // proses update
    mahasiswa = await mahasiswa.update(req.body);
    res.json({
        status: 200,
        message: "Sukses update data",
        data: mahasiswa,
    });
});


// DELETE
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    let mahasiswa = await Mahasiswa.findByPk(id);
    if (!mahasiswa) {
        return res.status(404).json({ status: 404, message: "Data tidak ditemukan!" });
    }

    await mahasiswa.destroy();
    res.json({
        status: 200,
        message: "Sukses menghapus data",
    });
});

module.exports = router;