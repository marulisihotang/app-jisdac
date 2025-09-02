module.exports = (sequelize, DataTypes) => {
  const Mahasiswa = sequelize.define(
    "Mahasiswa",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jurusan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "Mahasiswas",
    }
  );
  return Mahasiswa;
};