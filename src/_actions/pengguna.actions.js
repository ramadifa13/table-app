import { userService } from '../_services';
import { history } from '../_helpers';

export const penggunaAction = {
    getPengguna,
    getPenggunaById,
    onChangeProps,
    editPenggunaInfo,
    createPengguna,
    deletePenggunaById
};

function getPengguna(){
    return dispatch => {
        let apiEndpoint = 'users';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeusersList(response.data));
        }).catch((err)=>{
            console.log("Error");
            console.log(err);
        })
    };
}

function createPengguna(payload){
    return dispatch => {
        let apiEndpoint = 'users';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/');
        }) 
    }
}

function getPenggunaById(id){

    return dispatch => {
        let apiEndpoint = 'users/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editusersDetails(response.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editPenggunaInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'users/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/');
        }) 
    }
}

function deletePenggunaById(id){
    return dispatch => {
        let apiEndpoint = 'users/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteusersDetails());
            dispatch(penggunaAction.getPengguna());
        })
    };
}

export function changeusersList(pengguna){
    return{
        type: "FETECHED_ALL_PENGGUNA",
        pengguna: pengguna
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editusersDetails(pengguna){
    return{
        type: "PENGGUNA_DETAIL",
        id: pengguna.id,
        name: pengguna.name,
        email: pengguna.email,
        gender: pengguna.gender,
        status: pengguna.status
    }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}

export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteusersDetails(){
    return{
        type: "DELETED_PENGGUNA_DETAILS"
    }
}