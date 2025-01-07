module.exports = {
    getAll: (req, res) => {
        try {
            return res.status(200).json({ msg: "All Products" });
        } catch (error) {
            return res.status(500).json({ msg: "500 Server Error", error: error.message });
        }
    },
    getById: (req, res) => {
        try {
            return res.status(200).json({ msg: `Get product by ID: ${req.params.id}` });
        } catch (error) {
            return res.status(500).json({ msg: "500 Server Error", error: error.message });
        }
    },
    AddNew: (req, res) => {
        try {
            return res.status(200).json({ msg: "Add new product", body: req.body });
        } catch (error) {
            return res.status(500).json({ msg: "500 Server Error", error: error.message });
        }
    },
    Update: (req, res) => {
        try {
            return res.status(200).json({ msg: `Update product with ID: ${req.params.id}`, body: req.body });
        } catch (error) {
            return res.status(500).json({ msg: "500 Server Error", error: error.message });
        }
    },
    Delete: (req, res) => {
        try {
            return res.status(200).json({ msg: `Delete product with ID: ${req.params.id}` });
        } catch (error) {
            return res.status(500).json({ msg: "500 Server Error", error: error.message });
        }
    }
};
