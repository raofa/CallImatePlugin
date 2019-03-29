package com.yitong.callimateplugin.entity;

/**
 * 身份证信息
 * 
 */
public class IdCardVo {

	private String strAddress;
	private String strDay;
	private String strImageCode;
	private String strMonth;
	private String strNation;
	private String strName;
	private String strNo;
	private String strOffice;
	private String strSex;
	private String strValidity;
	private String strYear;
	private String strIssuer;

	public String getStrAddress() {
		return strAddress;
	}

	public void setStrAddress(String strAddress) {
		this.strAddress = strAddress;
	}

	public String getStrDay() {
		return strDay;
	}

	public void setStrDay(String strDay) {
		this.strDay = strDay;
	}

	public String getStrImageCode() {
		return strImageCode;
	}

	public void setStrImageCode(String strImageCode) {
		this.strImageCode = strImageCode;
	}

	public String getStrMonth() {
		return strMonth;
	}

	public void setStrMonth(String strMonth) {
		this.strMonth = strMonth;
	}

	public String getStrNation() {
		return strNation;
	}

	public void setStrNation(String strNation) {
		this.strNation = strNation;
	}

	public String getStrName() {
		return strName;
	}

	public void setStrName(String strName) {
		this.strName = strName;
	}

	public String getStrNo() {
		return strNo;
	}

	public void setStrNo(String strNo) {
		this.strNo = strNo;
	}

	public String getStrOffice() {
		return strOffice;
	}

	public void setStrOffice(String strOffice) {
		this.strOffice = strOffice;
	}

	public String getStrSex() {
		return strSex;
	}

	public void setStrSex(String strSex) {
		this.strSex = strSex;
	}

	public String getStrValidity() {
		return strValidity;
	}

	public void setStrValidity(String strValidity) {
		this.strValidity = strValidity;
	}

	public String getStrYear() {
		return strYear;
	}

	public void setStrYear(String strYear) {
		this.strYear = strYear;
	}

	public String getStrIssuer() {
		return strIssuer;
	}

	public void setStrIssuer(String strIssuer) {
		this.strIssuer = strIssuer;
	}

	/*
	 * 重写tostring
	 */
	@Override
	public String toString() {
		return "[IDCardInformation:   " + "name:" + this.strName + " sex"
				+ this.strSex + "  nation :" + this.strNation + "  id_no= "
				+ this.strNo + "strAddress" + strAddress + "strDay" + strDay
				+ "strMonth" + strMonth + "strOffice" + strOffice + "strIssuer"
				+ strIssuer + "strValidity" + strValidity + "]";
	}

}
