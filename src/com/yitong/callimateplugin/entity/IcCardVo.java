package com.yitong.callimateplugin.entity;


/**
 * IC卡二级磁道信息
 * 
 */
public class IcCardVo   {
	/**
	 * @Description
	 * @Author zhaoqianpeng(zqp@yitong.com.cn) 2014-7-2
	 */
	private static final long serialVersionUID = 1L;
	private String cardNo;// 卡号
	private String feild55;// 55域信息
	private String cardSNString;// 卡序号
	private String strTrack2;// 第二磁道

	// 对55域信息按照下面的字段进行解析
	private String icqc;
	private String f55a;
	private String f55b;
	private String f55c;
	private String f55d;
	private String f55e;
	private String f55f;
	private String f55g;
	private String f55h;
	private String f55i;
	private String f55j;
	private String f55k;
	private String f55l;
	private String f55m;

	public String getStrTrack2() {
		return strTrack2;
	}

	public void setStrTrack2(String strTrack2) {
		this.strTrack2 = strTrack2;
	}

	public String getCardSNString() {
		return cardSNString;
	}

	public void setCardSNString(String cardSNString) {
		this.cardSNString = cardSNString;
	}

	public String getFeild55() {
		return feild55;
	}

	public void setFeild55(String feild55) {
		this.feild55 = feild55;
	}

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public String getIcqc() {
		return icqc;
	}

	public void setIcqc(String icqc) {
		this.icqc = icqc;
	}

	public String getF55a() {
		return f55a;
	}

	public void setF55a(String f55a) {
		this.f55a = f55a;
	}

	public String getF55b() {
		return f55b;
	}

	public void setF55b(String f55b) {
		this.f55b = f55b;
	}

	public String getF55c() {
		return f55c;
	}

	public void setF55c(String f55c) {
		this.f55c = f55c;
	}

	public String getF55d() {
		return f55d;
	}

	public void setF55d(String f55d) {
		this.f55d = f55d;
	}

	public String getF55e() {
		return f55e;
	}

	public void setF55e(String f55e) {
		this.f55e = f55e;
	}

	public String getF55f() {
		return f55f;
	}

	public void setF55f(String f55f) {
		this.f55f = f55f;
	}

	public String getF55g() {
		return f55g;
	}

	public void setF55g(String f55g) {
		this.f55g = f55g;
	}

	public String getF55h() {
		return f55h;
	}

	public void setF55h(String f55h) {
		this.f55h = f55h;
	}

	public String getF55i() {
		return f55i;
	}

	public void setF55i(String f55i) {
		this.f55i = f55i;
	}

	public String getF55j() {
		return f55j;
	}

	public void setF55j(String f55j) {
		this.f55j = f55j;
	}

	public String getF55k() {
		return f55k;
	}

	public void setF55k(String f55k) {
		this.f55k = f55k;
	}

	public String getF55l() {
		return f55l;
	}

	public void setF55l(String f55l) {
		this.f55l = f55l;
	}

	public String getF55m() {
		return f55m;
	}

	public void setF55m(String f55m) {
		this.f55m = f55m;
	}

	/*
	 * override tostring
	 */
	@Override
	public String toString() {
		return "iccardInformaion: icno " + this.cardNo + "  field55"
				+ this.feild55 + "  f55a " + this.f55a + " icqc " + this.icqc;
	}

}
