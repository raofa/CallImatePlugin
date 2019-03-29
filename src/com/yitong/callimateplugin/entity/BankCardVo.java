package com.yitong.callimateplugin.entity;

/**
 * 借记卡 磁道信息
 * 
 */
public class BankCardVo {
	private String bankCardNo;
	private String strTrack2;
	private String strTrack3;
	private String errorString;

	public String getErrorString() {
		return errorString;
	}

	public void setErrorString(String errorString) {
		this.errorString = errorString;
	}

	public String getStrTrack2() {
		return strTrack2;
	}

	public void setStrTrack2(String strTrack2) {
		this.strTrack2 = strTrack2;
	}

	public String getStrTrack3() {
		return strTrack3;
	}

	public void setStrTrack3(String strTrack3) {
		this.strTrack3 = strTrack3;
	}

	public String getBankCardNo() {
		return bankCardNo;
	}

	public void setBankCardNo(String bankCardNo) {
		this.bankCardNo = bankCardNo;
	}

	/*
	 * (non-Javadoc)
	 */
	@Override
	public String toString() {
		return "bankinformation== cardno " + this.bankCardNo + " strTrack2 "
				+ this.strTrack2 + "  strTrack3 " + this.strTrack3;
	}
}
