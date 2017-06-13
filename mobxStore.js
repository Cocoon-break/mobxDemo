/**
 * Created by wushengping on 2017/6/13.
 */
import {observable, action, computed, toJS} from 'mobx'

class mobxStore {
    @observable count = 0

    @action addCount() {
        this.count = this.count + 1;
    }

    @action reduceCount() {
        this.count = this.count - 1;
    }
}

const store = new mobxStore()
export default store