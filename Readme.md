9 Test Cases
=================

Check the address for null to see if contract is deployed or not.

Call baz from a owner with quz > 2 when contract has sufficient balance - The onlyOwner modifier will hit and should pass, hence the function baz execution will continue. As quz is > 2 the amount equal to quz will be transferred to owners account from contract balance.

Call baz from a owner with quz < 2 when contract has sufficient balance - The onlyOwner modifier will hit and should pass, hence the function baz execution will continue. As quz is < 2, line 9 will fail with error message "quz must be > 2".

Call baz from a non-owner account  with quz > 2 when contract has sufficient balance -  The onlyOwner modifier will hit ans should pass and should return error message as "require owner = msg.sender". The execution will not continue further.

Call baz from a non-owner account  with quz < 2 when contract has sufficient balance -  The onlyOwner modifier will hit ans should pass and should return error message as "require owner = msg.sender". The execution will not continue further.

------------

Call baz from a owner with quz > 2 when contract has INsufficient balance - The onlyOwner modifier will hit and should pass, hence the function baz execution will continue. As quz is > 2 but the contract does not has sufficient balance hence error.

Call baz from a owner with quz < 2 when contract has INsufficient balance - The onlyOwner modifier will hit and should pass, hence the function baz execution will continue. As quz is < 2, line 9 will fail with error message "quz must be > 2".

Call baz from a non-owner account  with quz > 2 when contract has INsufficient balance -  The onlyOwner modifier will hit ans should pass and should return error message as "require owner = msg.sender". The execution will not continue further.

Call baz from a non-owner account  with quz < 2 when contract has INsufficient balance -  The onlyOwner modifier will hit ans should pass and should return error message as "require owner = msg.sender". The execution will not continue further.