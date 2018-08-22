var controller = {
    getLeaves(req, res){
        console.log(req.body)
        res.status(200).send({'message': 'Se recibieron los datos!'})
    },
    getPayments(req, res){
        // console.log(req)
        res.status(200).send({"employee": {"firstName": "Jose","lastName": "Cavazos","employeeId": "12345",},"policyId": 12345,"leaveType": "Personal Leave","payments": [{"date": "12/20/2018 00:00:00","amount": "499"},{"date": "12/22/2018 20:00:00","amount": "100"},{"date": "12/24/2018 11:00:00","amount": "900"}]})
    }
}

module.exports = controller;