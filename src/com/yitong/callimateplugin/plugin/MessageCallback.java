/**
 * 
 */
package com.yitong.callimateplugin.plugin;

import org.json.JSONObject;

/**
 * @Description  用于回调获取json对象
 */
public interface MessageCallback {

	public void callback(JSONObject jsonObject) ;

}
