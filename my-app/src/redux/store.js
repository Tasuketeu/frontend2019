// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";


let store={
    _state:{
        profilePage:{
            posts:[
                {id:1,message:"Hi", likesCount:25},
                {id:2,message:"Hi", likesCount:25},
                {id:3,message:"Hi", likesCount:25},
                {id:4,message:"Hi", likesCount:25},
                {id:5,message:"Hi", likesCount:25},
                {id:6,message:"Hi", likesCount:25}
            ],
            newPostText:""
        }
    },
    getState(){
      return this._state;
    },
    _rerenderEntireTree(){

    },

    subscribe(observer) {
        this._rerenderEntireTree=observer;
    },
    dispatch(action) {

        // this._state.profilePage=profileReducer(this._state.profilePage,action);
        // this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        // this._state.sidebar=sidebarReducer(this._state.sidebar,action);

        this._rerenderEntireTree(this._state);

    }

};



window.store=store;

export default store;