const Biro = require('./model');

const path = 'admin/biro';

module.exports = {
  index: async (req, res) => {
    try {
      res.render(`${path}/view_biro`, {
        title: 'Bidang Kegiatan'
      })
    } catch (err) {
      console.log(`error di index controller biro >>${err}`);
      res.redirect('/')
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render(`${path}/create`, {
        title: 'Tambah Bidang Kegiatan'
      })
    } catch (err) {
      console.log(`error di viewCreate controller biro >>${err}`);
      res.redirect('/biro')
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { name } = req.body;

      let biro = await Biro({ name });
      await biro.save();

      res.redirect('/biro');

      // res.send(req.body);

    } catch (err) {
      console.log(`error di actionCreate controller biro >>${err}`);
      res.redirect('/biro')
    }
  },
  
}