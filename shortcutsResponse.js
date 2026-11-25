/*
  Apple Shortcuts Response Custom Module (WebSocket Server + JSON Telemetry)
  Receives JSON results from the Apple Shortcuts Chataigne module over WebSocket.
  WebSocketServerModule parses incoming JSON into local.values when Protocol is JSON;
  this script fires a convenience trigger and logs Apple Shortcuts errors.
*/

function init()
{
}

function wsMessageReceived(connectionId, message)
{
	if (local.values.responseReceived)
	{
		local.values.responseReceived.trigger();
	}
}

function moduleValueChanged(value)
{
	if (value.name == "error")
	{
		var err = value.get();
		if (err != "")
		{
			script.logWarning("Apple Shortcuts error: " + err);
		}
	}
}
