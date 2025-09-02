module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mahasiswas', [
      {
        nama: 'Kevin Saputra',
        jurusan: 'Sastra Mesin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Abdullah Kaarim',
        jurusan: 'Teknik Psikologi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: 'Simon Petrus',
        jurusan: 'Ilmu Penjalaan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mahasiswas', null, {});
  },
};