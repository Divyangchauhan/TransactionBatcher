/// SPDX-License-Identifier: MIT
pragma solidity ~0.8.0;

contract TransactionBatcher {
    function batchSend(
        address[] calldata targets,
        uint[] calldata values,
        bytes[] calldata datas
    ) public payable {
        for (uint i = 0; i < targets.length; i++) {
            targets[i].call{value: values[i]}(datas[i]);
        }
    }
}
