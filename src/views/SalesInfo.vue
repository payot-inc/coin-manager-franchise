<template>
<div class="admin_page">
                    <div class="page_title">
                        <h2>업체관리</h2>
                        <h3>기간별 매출현황</h3>
                    </div>

                    
                        <h4>상세검색</h4>
                        <section class="shop_search" style="margin-bottom:30px;">
                            <table class="ui table">
                                <tbody><tr>
                                    <td>기간선택</td>
                                    <td>
                                        <p><label class="ui bottom pointing label">※ 3개월 내에 매출정보를 조회할 수 있습니다</label></p>
                                        <div class="ui calendar" style="display:inline-block">
                                            <div class="ui input left icon"><div class="ui popup calendar"><table class="ui celled center aligned unstackable table seven column day"><thead><tr><th colspan="7"><span class="link">October 2018</span><span class="prev link"><i class="chevron left icon"></i></span><span class="next link"><i class="chevron right icon"></i></span></th></tr><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead><tbody><tr><td class="link adjacent disabled">30</td><td class="link">1</td><td class="link">2</td><td class="link">3</td><td class="link">4</td><td class="link">5</td><td class="link">6</td></tr><tr><td class="link">7</td><td class="link">8</td><td class="link">9</td><td class="link">10</td><td class="link">11</td><td class="link">12</td><td class="link">13</td></tr><tr><td class="link">14</td><td class="link">15</td><td class="link">16</td><td class="link">17</td><td class="link">18</td><td class="link">19</td><td class="link">20</td></tr><tr><td class="link">21</td><td class="link">22</td><td class="link">23</td><td class="link">24</td><td class="link">25</td><td class="link today focus">26</td><td class="link">27</td></tr><tr><td class="link">28</td><td class="link">29</td><td class="link">30</td><td class="link">31</td><td class="link adjacent disabled">1</td><td class="link adjacent disabled">2</td><td class="link adjacent disabled">3</td></tr><tr><td class="link adjacent disabled">4</td><td class="link adjacent disabled">5</td><td class="link adjacent disabled">6</td><td class="link adjacent disabled">7</td><td class="link adjacent disabled">8</td><td class="link adjacent disabled">9</td><td class="link adjacent disabled">10</td></tr><tr><td colspan="7" class="today link focus">Today</td></tr></tbody></table></div>
                                                <i class="calendar icon"></i>
                                                <input type="text" placeholder="Date/Time">
                                            </div>
                                        </div>
                                        <div class="ui calendar" style="display:inline-block">
                                            <div class="ui input left icon"><div class="ui popup calendar"><table class="ui celled center aligned unstackable table seven column day"><thead><tr><th colspan="7"><span class="link">October 2018</span><span class="prev link"><i class="chevron left icon"></i></span><span class="next link"><i class="chevron right icon"></i></span></th></tr><tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr></thead><tbody><tr><td class="link adjacent disabled">30</td><td class="link">1</td><td class="link">2</td><td class="link">3</td><td class="link">4</td><td class="link">5</td><td class="link">6</td></tr><tr><td class="link">7</td><td class="link">8</td><td class="link">9</td><td class="link">10</td><td class="link">11</td><td class="link">12</td><td class="link">13</td></tr><tr><td class="link">14</td><td class="link">15</td><td class="link">16</td><td class="link">17</td><td class="link">18</td><td class="link">19</td><td class="link">20</td></tr><tr><td class="link">21</td><td class="link">22</td><td class="link">23</td><td class="link">24</td><td class="link">25</td><td class="link today focus">26</td><td class="link">27</td></tr><tr><td class="link">28</td><td class="link">29</td><td class="link">30</td><td class="link">31</td><td class="link adjacent disabled">1</td><td class="link adjacent disabled">2</td><td class="link adjacent disabled">3</td></tr><tr><td class="link adjacent disabled">4</td><td class="link adjacent disabled">5</td><td class="link adjacent disabled">6</td><td class="link adjacent disabled">7</td><td class="link adjacent disabled">8</td><td class="link adjacent disabled">9</td><td class="link adjacent disabled">10</td></tr><tr><td colspan="7" class="today link focus">Today</td></tr></tbody></table></div>
                                                <i class="calendar icon"></i>
                                                <input type="text" placeholder="Date/Time">
                                            </div>
                                        </div>
                                     </td>
                                </tr>
                                <tr>
                                    <td>지점선택</td>
                                    <td>
                                        <div class="ui dropdown selection" tabindex="0"><select>
                                            <option>지역</option>
                                        </select><i class="dropdown icon"></i><div class="text">지역</div><div class="menu" tabindex="-1"><div class="item active selected" data-value="지역">지역</div></div></div>
                                        <div class="ui dropdown selection" tabindex="0"><select>
                                            <option>시·도</option>
                                        </select><i class="dropdown icon"></i><div class="text">시·도</div><div class="menu" tabindex="-1"><div class="item active selected" data-value="시·도">시·도</div></div></div>
                                        <div class="ui dropdown selection" tabindex="0"><select>
                                            <option>구</option>
                                        </select><i class="dropdown icon"></i><div class="text">구</div><div class="menu" tabindex="-1"><div class="item active selected" data-value="구">구</div></div></div>
                                        <div class="ui dropdown selection" tabindex="0"><select>
                                            <option>동</option>
                                        </select><i class="dropdown icon"></i><div class="text">동</div><div class="menu" tabindex="-1"><div class="item active selected" data-value="동">동</div></div></div>
                                        <div class="ui dropdown selection" tabindex="0"><select>
                                            <option>지점</option>
                                        </select><i class="dropdown icon"></i><div class="text">지점</div><div class="menu" tabindex="-1"><div class="item active selected" data-value="지점">지점</div></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>장비선택</td>
                                    <td>
                                        <div class="ui dropdown selection" tabindex="0"><select>
                                            <option>전체</option>
                                            <option>세탁기</option>
                                            <option>건조기</option>
     
                                        </select><i class="dropdown icon"></i><div class="text">전체</div><div class="menu" tabindex="-1"><div class="item active selected" data-value="전체">전체</div><div class="item" data-value="세탁기">세탁기</div><div class="item" data-value="건조기">건조기</div></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="ui center aligned">
                                        <button class="ui violet button">검색하기</button>
                                    </td>
                                </tr>
                            </tbody></table>
                        </section>

                        <h4>매출통계</h4>
                        <section class="section_box sales_info">
                            <div class="header">※ 검색기간: 2018.07.08~2018.09.21</div>
                            <div class="ui segment">그래프자리</div>
                            <div class="ui five column doubling stackable grid">
                                <div class="ui center aligned column">
                                    <dl>
                                        <dt class="ui bottom pointing blue label">총 매출</dt>
                                        <dd>
                                            16,800,000원
                                        </dd>
                                    </dl>
                                </div>
                                <div class="ui center aligned column">
                                    <dl>
                                        <dt class="ui bottom pointing teal label">총 순수익</dt>
                                        <dd>
                                            16,800,000원
                                        </dd>
                                    </dl>
                                </div>
                                <div class="ui center aligned column">
                                    <dl>
                                        <dt class="ui bottom pointing purple label">평균 수익률</dt>
                                        <dd>
                                            16,800,000원
                                        </dd>
                                    </dl>
                                </div>
                                <div class="ui center aligned column">
                                    <dl>
                                        <dt class="ui bottom pointing brown label">평균 매출</dt>
                                        <dd>
                                            16,800,000원
                                        </dd>
                                    </dl>
                                </div>
                                <div class="ui center aligned column">
                                    <dl>
                                        <dt class="ui bottom pointing green label">평균 순수익</dt>
                                        <dd>
                                            16,800,000원
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </section>


                <div class="black_bg"></div>
            </div>
</template>
