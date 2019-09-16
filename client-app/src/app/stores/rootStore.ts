import ActivityStore from "./activityStore";
import UserStore from "./userStore";
import { createContext } from "react";
import { configure } from "mobx";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";

configure({ enforceActions: "always" });

export class RootStore {
  commonStore: CommonStore;
  activityStore: ActivityStore;
  userStore: UserStore;
  modalStore: ModalStore;
  profileStore: ProfileStore;

  constructor() {
    this.commonStore = new CommonStore(this);
    this.activityStore = new ActivityStore(this);
    this.userStore = new UserStore(this);
    this.modalStore = new ModalStore(this);
    this.profileStore = new ProfileStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
