<template>
    <div class="admin_page">
        <div class="page_title">
            <h2>업체관리</h2>
            <h3>업체등록</h3>
        </div>

        <h4>업체정보 입력</h4>

        <div class="section_box shop_signup">

            <section class="section">
                <h5><i class="ui caret square right icon"></i>계정정보</h5>
                <div class="ui form">
                    <div class="four fields">
                        <div class="field">
                            <label>이메일</label>
                            <sui-input 
                                name="email" 
                                data-vv-as="email" 
                                v-validate="{ required: true, email: true }" 
                                v-model="company.email" 
                                placeholder="이메일">
                            </sui-input>
                            <span v-show="errors.has('email')">
                                이메일은 필수입력사항입니다
                            </span>
                        </div>
                        <div class="field">
                            <label>비밀번호</label>
                            <sui-input v-validate="'required|min:4'" type="password" name="password" data-vv-as="password_confirmation" v-model="company.password" placeholder="비밀번호">
                            </sui-input>
                            <span v-show="errors.has('password')">
                                비밀번호는 4자이상 필수입력사항입니다
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <h5><i class="ui caret square right icon"></i>기본정보</h5>
                <div class="ui form">
                    <div class="five fields">
                        <div class="field">
                            <label>업체명</label>
                            <sui-input></sui-input>
                        </div>
                        <div class="field">
                            <label>대표자명</label>
                            <sui-input v-validate="{ required: true, min: 2 }" data-vv-as="owner_name" name="owner_name" v-model="owner.name" placeholder="대표자명">
                            </sui-input>
                        </div>
                        <div class="field">
                            <label>성별</label>
                            <sui-dropdown fluid selection direction="downward" v-model="owner.gender" :options="dropdown.gender" placeholder="성별">
                            </sui-dropdown>
                        </div>
                        <div class="field">
                            <label>전화번호</label>
                            <sui-input v-validate="{ required: true, regex: /^\d{2,3}-\d{3,4}-\d{4}$/ }" data-vv-as="tel" name="tel" v-model="company.tel" placeholder="전화번호">
                            </sui-input>
                        </div>
                        <div class="field">
                            <label>휴대전화 번호</label>
                            <sui-input v-validate="{ required: true, regex: /^\d{2,3}-\d{3,4}-\d{4}$/ }" data-vv-as="phone" name="phone" v-model="owner.phone" placeholder="휴대 전화번호">
                            </sui-input>
                        </div>
                    </div>
                    <div class="two fields">
                        <div class="field">
                            <label>사업자번호</label>
                            <sui-input v-validate="{ required: true, length: 10 }" data-vv-as="company_number" name="company_number" v-model="company.number" placeholder="사업자번호">
                            </sui-input>
                        </div>
                        <div class="fields">
                            <div class="sixteen wide field">
                                <label>사업장 주소</label>
                                <sui-input v-validate="{ required: true }" data-vv-as="address" name="address" v-model="company.address" placeholder="사업장 주소">
                                </sui-input>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <h5><i class="ui caret square right icon"></i>상세정보</h5>
                <div class="ui form">
                    <div class="three fields">
                        <div class="field">
                            <label>면적</label>
                            <sui-input v-validate="{ required: true, numberic: true }" name="space" data-vv-as="space" v-model="company.space" placeholder="제곱미터">
                            </sui-input>
                        </div>
                        <div class="field">
                            <label>층수</label>
                            <sui-input v-validate="{ required: true, numberic: true }" name="floor" data-vv-as="floor" v-model="company.floor" placeholder="층수">
                            </sui-input>
                        </div>
                    </div>

                    <div class="four fields">
                        <div class="field">
                            <label>권리금</label>
                            <div class="ui right labeled input">
                                <input v-validate="{ required: true, numberic: true }" name="premium" data-vv-as="premium" type="text" v-model="owner.premium" placeholder="권리금">
                                <div class="ui basic label">원</div>
                            </div>
                        </div>
                        <div class="field">
                            <label>보증금</label>
                            <div class="ui right labeled input">
                                <input v-validate="{ required: true, numberic: true }" name="deposit" data-vv-as="deposit" type="text" v-model="owner.deposit" placeholder="보증금">
                                <div class="ui basic label">원</div>
                            </div>
                        </div>
                        <div class="field">
                            <label>장비투자금</label>
                            <div class="ui right labeled input">
                                <input v-validate="{ required: true, numberic: true }" name="machinePrice" data-vv-as="machinePrice" type="text" v-model="owner.machinePrice" placeholder="장비투자금">
                                <div class="ui basic label">원</div>
                            </div>
                        </div>
                        <div class="field">
                            <label>시설 및 기타비용</label>
                            <div class="ui right labeled input">
                                <input v-validate="{ required: true, numberic: true }" name="etc" data-vv-as="etc" type="text" v-model="owner.etc" placeholder="시설 및 기타비용">
                                <div class="ui basic label">원</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

        <h4>장비등록</h4>

        <div class="section_box shop_signup">
            <section class="section">
                <h5>
                    <i class="ui caret square right icon"></i>
                    장비정보 입력
                </h5>
                <div class="ui form">
                    <div class="four fields">
                        <div class="field">
                            <label>장비명</label>
                            <sui-input v-model="machine.name">
                            </sui-input>
                        </div>
                        <div class="field">
                            <label>브랜드</label>
                            <sui-dropdown fluid selection direction="downward" :options="dropdown.brand" v-model="machine.brand" placeholder="장비 브랜드명">
                            </sui-dropdown>
                        </div>
                        <div class="field">
                            <label>종류</label>
                            <sui-dropdown fluid selection direction="downward" :options="dropdown.machineType" v-model="machine.type" placeholder="장비 종류">
                            </sui-dropdown>
                        </div>
                        <div class="field">
                            <label>용량</label>
                            <div class="ui right labeled input">
                                <input type="number" v-model.number="machine.size" placeholder="장비 용량">
                                <div class="ui basic label">Kg</div>
                            </div>
                        </div>
                    </div>
                    <div class="five fields">
                        <div class="field">
                            <label>MAC 주소</label>
                            <sui-input placeholder="MAC주소" v-model="machine.mac"></sui-input>
                        </div>
                        <div class="field">
                            <label>대표 서비스 가격</label>
                            <div class="ui right labeled input">
                                <input type="number" name="machine_price" v-model.number="machine.defaultPrice" placeholder="대표 서비스 가격">
                                <div class="ui basic label">원</div>
                            </div>
                        </div>
                        <div class="field">
                            <label>대표 서비스 간</label>
                            <div class="ui right labeled input">
                                <input
                                    type="number"
                                    name="machine_price"
                                    v-model.number="machine.defaultRunTime"
                                    placeholder="동작시간">
                                <div class="ui basic label">초</div>
                            </div>
                        </div>
                        <div class="field">
                            <label>도입시기</label>
                            <div class="ui input">
                                <sui-input type="date" v-model="machine.installAt" placeholder="장비 도입시기">
                                </sui-input>
                            </div>
                        </div>
                        <div class="field">
                            <label>장비 도입가격</label>
                            <div class="ui right labeled input">
                                <input type="number" name="machine_price" v-model.number="machine.price" placeholder="장비 도입가격">
                                <div class="ui basic label">원</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="eq_list_btns ui center aligned basic segment">
                    <div class="ui violet button" @click="addMachine">
                        장비등록 하기
                    </div>
                </div>
            </section>

            <section class="section">
                <h5><i class="ui caret square right icon"></i>장비리스트</h5>
                <div class="eq_list_table">
                    <table>
                        <thead>
                            <tr>
                                <th class="and">
                                    <sui-checkbox v-model="selected.all"></sui-checkbox>
                                </th>
                                <th>이름</th>
                                <th>MAC</th>
                                <th>브랜드</th>
                                <th>종류</th>
                                <th>용량</th>
                                <th>도입시기</th>
                                <th>장비도입가격</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(m, index) in machines" :key="index">
                                <td class="and">
                                    <sui-checkbox :value="index" v-model="selected.items"></sui-checkbox>
                                </td>
                                <td>{{ m.name }}</td>
                                <td>{{ m.mac ? m.mac.toUpperCase() : '' }}</td>
                                <td>{{ m.brand }}</td>
                                <td>{{ m.type }}</td>
                                <td>{{ m.size }}Kg</td>
                                <td>{{ m.installAt }}</td>
                                <td>{{ m.price ? m.price.toLocaleString() : 0 }}원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="eq_list_btns">
                    <sui-button @click="deleteMachine" size="mini" class="right floated black">
                        선택한 장비 삭제하기
                    </sui-button>
                </div>
            </section>
        </div>

        <div class="ui center aligned">
            <sui-button fluid size="big" @click="validate" class="violet">
                등록완료
            </sui-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      company: {},
      owner: {},
      machine: {},
      machines: [],
      dropdown: {
        gender: [{ text: '남자', value: '남' }, { text: '여자', value: '여' }],
        machineType: [
          { text: '세탁기', value: '세탁기' },
          { text: '건조기', value: '건조기' },
          { text: '기타', value: '기타' },
        ],
        brand: [
          { text: '언라이언스', value: '언라이언스' },
          { text: '언라이언스', value: '언라이언스' },
        ],
      },
      selected: {
        all: false,
        items: [],
      },
    };
  },
  watch: {
    'selected.all': function (newValue) {
      this.selected.items = newValue ? _.times(this.machines.length) : [];
    },
  },
  methods: {
    validate() {
      this.$validator.validateAll();

      console.log(this.errors.any());
    },
    addMachine() {
      this.machines.push(this.machine);
      this.machine = {};
    },
    deleteMachine() {
      const self = this;
      this.selected.items.sort((a, b) => b - a).forEach((index) => {
        self.machines.splice(index, 1);
      });
      this.selected.items = [];
    },
  },
};
</script>

<style scoped>
span {
  color: red;
}
</style>

