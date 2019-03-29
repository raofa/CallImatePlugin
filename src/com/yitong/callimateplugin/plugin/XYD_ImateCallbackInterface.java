/**
 * 
 */
package com.yitong.callimateplugin.plugin;

import org.json.JSONObject;

import android.os.Bundle;

/**
 * @Description 信雅达背夹回调接口
 */
public interface XYD_ImateCallbackInterface {

	public JSONObject modelError(String str);

	public JSONObject modelIcCard(Bundle bundle);

	public JSONObject modelBankCard(Bundle bundle);

}
