const Gig = require("../models/gig.js")

const createGig = async (req, res) => {
    if (!req.isSeller) { return res.status(403).send("This feature is for sellers only."); }

    const newGig = new Gig({
        userID: req.userId,
        ...req.body,
    });

    try {
        const savedGig = await newGig.save();
        res.status(201).json(savedGig);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred while saving the gig."); // Send an error response
    }
};

const deleteGig = async (req, res) => {
    try {
        // Check if the gig exists
        const gig = await Gig.findById(req.params.id);
        if (!gig) {
            return res.status(404).send('Gig does not exist.');
        }

        // Check if the user owns the gig
        if (gig.userID !== req.userId) {
            return res.status(403).send('You do not own this gig.');
        }

        // Delete the gig
        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig deleted successfully.");

    } catch (err) {
        console.log(err);
        res.status(500).send("Error Occurred: " + err);
    }
};

const getAllGigs = async (req, res) => {
  const q = req.query;
  const filters = {
    ...(q.userID && { userID: q.userID }),
    ...(q.category && { category: q.category }), 
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };

  // If category is not provided, remove it from filters
  if (!q.category) {
    delete filters.category;
  }

  try {
    const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(gigs);
  } catch (err) {
    console.log(err); // Log the error
    res.status(500).send("Internal Server Error"); // Send an appropriate error response
  }
};



const getSingleGig = async (req, res) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return res.status(404).send("Gig not found.");
    }
    res.status(200).send(gig);
  } catch (err) {
    if (err.name === 'CastError') {
      return res.status(400).send("Invalid gig ID.");
    } else {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  }
};


module.exports = {createGig, deleteGig, getAllGigs, getSingleGig}