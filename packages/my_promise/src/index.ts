const STATE = {
  FULFILLED: "fulfilled",
  PENDING: "pending",
  REJECTED: "rejected",
};

class MyPromise {
  private then_cb_list: Function[] = [];
  private catch_cb_list: Function[] = [];
  private state = STATE.PENDING;
  private value: any;

  constructor(cb) {
    try {
      cb(this.onSuccess, this.onFail);
    } catch (error) {
      this.onFail(error);
    }
  }

  private runCbList() {
    if (this.state === STATE.FULFILLED) {
    }

    if (this.state === STATE.REJECTED) {
    }
  }

  private onSuccess(value) {
    if (this.state !== STATE.PENDING) return;
    this.value = value;
    this.state = "fulfilled";
  }

  private onFail(value) {
    if (this.state !== STATE.PENDING) return;
    this.value = value;
    this.state = "rejected";
  }

  then(cb: Function) {
    this.then_cb_list.push(cb);
  }

  catch(cb: Function) {
    this.catch_cb_list.push(cb);
  }
}

const p = new Promise((resolve, reject) => {
  resolve("Hello");
  reject("err");
}).then();

export default MyPromise;
