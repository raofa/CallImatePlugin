/*
 */
package com.yitong.callimateplugin.constants;

import java.util.ArrayList;

public class Constants {

	public static final boolean IS_DEBUG = false;// 是否测试环境

	public static String PAGE_URL = "PAGE_URL";// 用于传递pageURL

	public static String PAGE_WEB_URL = "PAGE_WEB_URL";// web用于传递pageURL

	public static final String SP_REB_ACC_FLG = "reb_acc_flg"; // 记住密码标志

	public static final String SP_REB_LOCATION_FLG = "SP_REB_LOCATION_FLG"; // 记住定位标志

	public static final String SP_ACCOUT = "account"; // 账户

//	public static ArrayList<ProductVo> updatePro = new ArrayList<ProductVo>();

	public static final String SP_NEW_PRODUCT = "sp_new_product"; // 新的
	// A面产品、新闻、产品展架数据
	public static final String SP_OLD_PRODUCT = "sp_old_product"; // 旧的
	// A面产品、新闻、产品展架数据
	public static boolean DATA_A_LOAD_FLG = false;
	// 修改手势密码 判断
	public static boolean GES_PWD_SIGN = false;

	// 展架上面 对应的 标识
	public final static int PROGESS_START = 1;// 开始的显示进度条
	public final static int PROGESS_END = 2;// 结束的显示进度条
	public final static int PROGESS_ACTIVE = 3;// 进行中的进度条
	public final static int PROGESS_SUCCESS = 4;// 成功进度条
	public final static int PROGESS_FAIL = 5;// 失败显示的进度条
	public final static int PROGESS_OVER_DOWNLOAD = 6;// 文件已经下载

	// 展架上面 对应的 标识 投资理财 电子银行 信贷产品 都是没有tab
	public final static String BOOKSHELF_TAB = "TAB";// 有tab数据的分类 字段
	public final static String BOOKSHELF_NOTAB = "NOTAB";// 没有 tab 数据的分类 字段
	public final static String BOOKSHELF_TITLE = "TITLE";// 产品名称 字段
	// 中间业务 item数据
	public final static String BOOKSHELF_TAB_ITEM = "TAB_ITEM";
	
	// 特约商户  保存的res文件名称
	public final static String SP_STORE_FILE = "SP_STORE_FILE";

}
