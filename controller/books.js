//nothing to require

//create = POST
function create(req, res) {
     
    res.status(200).json({message: "Create, you did."});
}

//retrieve = GET
function retrieveAll(req, res) {
    
    res.status(200).json({message: "Retrieving all"});
}

function update(req, res) {
    
    res.status(200).json({message: "You updater"});
}

function deleteOne(req, res) {
    
    res.status(200).json({mesage: 'deleted'});
    
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne
};
