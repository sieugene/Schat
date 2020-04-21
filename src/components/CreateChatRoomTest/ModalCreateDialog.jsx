import React, { useState } from 'react'
import { Modal, Input, Select, Row, Col } from 'antd';
import Button from './../Button/Button';
import { connect } from 'react-redux';
import { setSubmitDisabledToggle } from '../../redux/CreateChat';
import { changeVisibleModal } from './../../redux/CreateChat';

const { Search } = Input;
const { Option } = Select;

const ModalCreateDialog = (props) => {
    const [valueOption, setValueOption] = useState('');
    const [users, setUsers] = useState('')

    const showModal = () => {
        props.changeVisibleModal(true);
    }
    const handleOk = e => {
        props.creatingChat(uidSelected());
    }
    const handleCancel = e => {
        props.changeVisibleModal(false)
    }
    const handleChangeSearch = (e) => {
        if (e.target.value === '') {
            setUsers('');
        } else {
            let result = props.users && props.users.filter(function (val) {
                return (val.email + "").indexOf(e.target.value) !== -1;
            });
            setUsers(result);
        }
    }
    const handleChangeValueOption = (e) => {
        setValueOption(e)
        if (e === '') {
            return props.setSubmitDisabledToggle(true)
        } else {
            return props.setSubmitDisabledToggle(false)
        }
    }
    const uidSelected = () => {
        if (valueOption) {
            let result = props.users.filter((u) => {
                return u.email === valueOption
            })
            return result[0].id;
        }
    }
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Создание чата"
                visible={props.visibleModal}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Закрыть
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk} 
                    disabled={props.submitDisabled}>
                        Создать
                    </Button>,
                ]}>
                {props.erros && props.erros}
                <br/>

                <Search
                    placeholder="введите email"
                    onChange={handleChangeSearch}
                    style={{ width: 200 }}
                />


                {users.length >= 1 &&
                    <Select value={valueOption} onChange={handleChangeValueOption}
                        style={{ width: '30%' }}>
                        <Option value={''} selected  ></Option>
                        {users && users.map((u) => {
                            return <Option value={u.email} key={u.id}>{u.email}</Option>
                        })}
                    </Select>
                }

                <br />

            </Modal>
        </div>
    )

}

let mapStateToProps = (state) => {
    return {
        erros: state.createChat.erros,
        submitDisabled: state.createChat.submitDisabled,
        visibleModal: state.createChat.visibleModal
    }
}

export default connect(mapStateToProps, {
    setSubmitDisabledToggle,
    changeVisibleModal
})(ModalCreateDialog)