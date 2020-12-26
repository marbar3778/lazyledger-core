// Code generated by mockery v2.4.0. DO NOT EDIT.

package mocks

import (
	state "github.com/lazyledger/lazyledger-core/state"
	mock "github.com/stretchr/testify/mock"

	types "github.com/lazyledger/lazyledger-core/types"
)

// EvidencePool is an autogenerated mock type for the EvidencePool type
type EvidencePool struct {
	mock.Mock
}

// AddEvidence provides a mock function with given fields: _a0
func (_m *EvidencePool) AddEvidence(_a0 types.Evidence) error {
	ret := _m.Called(_a0)

	var r0 error
	if rf, ok := ret.Get(0).(func(types.Evidence) error); ok {
		r0 = rf(_a0)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// CheckEvidence provides a mock function with given fields: _a0
func (_m *EvidencePool) CheckEvidence(_a0 types.EvidenceList) error {
	ret := _m.Called(_a0)

	var r0 error
	if rf, ok := ret.Get(0).(func(types.EvidenceList) error); ok {
		r0 = rf(_a0)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// PendingEvidence provides a mock function with given fields: maxBytes
func (_m *EvidencePool) PendingEvidence(maxBytes int64) ([]types.Evidence, int64) {
	ret := _m.Called(maxBytes)

	var r0 []types.Evidence
	if rf, ok := ret.Get(0).(func(int64) []types.Evidence); ok {
		r0 = rf(maxBytes)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).([]types.Evidence)
		}
	}

	var r1 int64
	if rf, ok := ret.Get(1).(func(int64) int64); ok {
		r1 = rf(maxBytes)
	} else {
		r1 = ret.Get(1).(int64)
	}

	return r0, r1
}

// Update provides a mock function with given fields: _a0, _a1
func (_m *EvidencePool) Update(_a0 state.State, _a1 types.EvidenceList) {
	_m.Called(_a0, _a1)
}
