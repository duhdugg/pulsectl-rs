var searchIndex = JSON.parse('{\
"pulsectl":{"doc":"<code>pulsectl</code> is a high level wrapper around the PulseAudio …","t":[13,13,4,3,13,13,11,11,11,11,11,11,11,12,0,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,8,8,3,3,11,11,11,11,11,11,10,11,11,10,11,11,11,11,10,11,11,10,11,11,10,11,11,10,11,11,11,11,12,12,10,11,11,10,11,11,11,11,10,11,11,10,11,11,10,11,11,10,11,11,10,11,11,10,11,11,10,11,11,10,11,11,10,11,11,10,11,11,11,11,11,11,11,11,0,3,4,3,3,4,13,13,13,3,13,13,13,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,11,12,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12],"n":["Connect","Controller","Error","Handler","Operation","PulseAudio","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","connect","context","controllers","drop","fmt","fmt","from","from","from","into","into","introspect","mainloop","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","wait_for_operation","AppControl","DeviceControl","SinkController","SourceController","borrow","borrow","borrow_mut","borrow_mut","create","create","decrease_app_volume_by_percent","decrease_app_volume_by_percent","decrease_app_volume_by_percent","decrease_device_volume_by_percent","decrease_device_volume_by_percent","decrease_device_volume_by_percent","from","from","get_app_by_index","get_app_by_index","get_app_by_index","get_default_device","get_default_device","get_default_device","get_device_by_index","get_device_by_index","get_device_by_index","get_device_by_name","get_device_by_name","get_device_by_name","get_server_info","get_server_info","handler","handler","increase_app_volume_by_percent","increase_app_volume_by_percent","increase_app_volume_by_percent","increase_device_volume_by_percent","increase_device_volume_by_percent","increase_device_volume_by_percent","into","into","list_applications","list_applications","list_applications","list_devices","list_devices","list_devices","move_app_by_index","move_app_by_index","move_app_by_index","move_app_by_name","move_app_by_name","move_app_by_name","set_app_mute","set_app_mute","set_app_mute","set_default_device","set_default_device","set_default_device","set_device_mute_by_index","set_device_mute_by_index","set_device_mute_by_index","set_device_mute_by_name","set_device_mute_by_name","set_device_mute_by_name","set_device_volume_by_index","set_device_volume_by_index","set_device_volume_by_index","set_device_volume_by_name","set_device_volume_by_name","set_device_volume_by_name","try_from","try_from","try_into","try_into","type_id","type_id","types","ApplicationInfo","DevState","DeviceInfo","DevicePortInfo","Flags","Idle","Invalid","Running","ServerInfo","SinkFlags","SourceFLags","Suspended","active_port","available","base_volume","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","buffer_usec","card","channel_map","channel_map","channel_map","client","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","configured_latency","connection_id","connection_usec","cookie","corked","default_sink_name","default_source_name","description","description","driver","driver","eq","flags","fmt","fmt","fmt","fmt","fmt","fmt","format","formats","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","from","has_volume","host_name","index","index","into","into","into","into","into","into","latency","monitor","monitor_name","mute","mute","n_volume_steps","name","name","name","owner_module","owner_module","ports","priority","proplist","proplist","resample_method","sample_spec","sample_spec","sample_spec","server_name","server_version","state","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","user_name","volume","volume","volume_writable"],"q":["pulsectl","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pulsectl::controllers","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","pulsectl::controllers::types","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["An error that may occur while establishing a connection.","A problem occurs while fetching data from pulseaudio.","Error thrown when PulseAudio throws an error code.","Main wrapper on libpulse-binding API","The requested operation is cancelled or quits …","PulseAudio returns an error code in any circumstance.","","","","","","","","An opaque connection context to a daemon.","These are controllers helpful when working with …","","","","","","","","","A wrapper object providing introspection routines to a …","Safe interface to the internal PA Mainloop.","","","","","","","","","loops until the passed operation is completed","","","This handles device that plays out audio (e.g., …","This handles devices which takes in audio (e.g., …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","This is a wrapper around SinkState and SourceState as …","","These structs are direct representations of what …","","When idle, the sink is playing but there is no non-corked …","This state is used when the server does not support sink …","Running, sink is playing and used by at least one …","","","","When suspended, actual sink access can be closed, for …","","A flag indicating availability status of this port.","Some kind of “base” volume that refers to …","","","","","","","","","","","","","Latency due to buffering in sink input, see …","Card index, or <code>None</code> if invalid.","Channel map.","Channel map.","Default channel map.","Index of the client this sink input belongs to, or …","","","","","","","","","","","The latency this device has been configured to.","Index of the connected sink/source.","Latency of the sink device, see <code>def::TimingInfo</code> for …","A random cookie for identifying this instance of …","Stream corked.","Name of default sink.","Name of default source.","Description of this sink.","Description of this sink.","Driver name.","Driver name.","","Flags.","","","","","","","Stream format information.","Set of formats supported by the sink.","","","","","","","","","","","","","","","","","","Stream has volume. If not set, then the meaning of this …","Host name the daemon is running on.","Index of the sink.","Index of the sink input.","","","","","","","Length of queued audio in the output buffer.","Index of the monitor source connected to this sink.","The name of the monitor source.","Mute switch of the sink.","Stream muted.","Number of volume steps for sinks which do not support …","Name of the sink.","Name of the sink.","Name of the sink input.","Index of the owning module of this sink, or <code>None</code> if is …","Index of the module this sink input belongs to, or <code>None</code> …","Set of available ports.","The higher this value is, the more useful this port is as …","Property list.","Property list.","The resampling method used by this sink input.","Sample spec of this sink.","The sample specification of the sink input.","Default sample specification.","Server package name (usually “pulseaudio”).","Version string of the daemon.","State.","","","","","","","","","","","","","","","","","","","","","","","","User name of the daemon process.","Volume of the sink.","The volume of this sink input.","The volume can be set. If not set, the volume can still …"],"i":[1,1,0,0,1,1,2,1,2,1,1,1,2,2,0,2,1,1,2,1,1,2,1,2,2,1,1,2,1,2,1,2,1,2,0,0,0,0,3,4,3,4,3,4,5,3,4,6,3,4,3,4,5,3,4,6,3,4,6,3,4,6,3,4,3,4,3,4,5,3,4,6,3,4,3,4,5,3,4,6,3,4,5,3,4,5,3,4,5,3,4,6,3,4,6,3,4,6,3,4,6,3,4,6,3,4,3,4,3,4,3,4,0,0,0,0,0,0,7,7,7,0,8,8,7,9,10,9,10,7,8,9,11,12,10,7,8,9,11,12,11,9,9,11,12,11,10,7,8,9,11,10,7,8,9,11,9,11,11,12,11,12,12,10,9,9,11,7,9,10,7,8,9,11,12,11,9,10,10,10,10,10,7,7,7,8,9,9,9,11,11,11,12,12,11,12,9,11,10,7,8,9,11,12,9,9,9,9,11,9,10,9,11,9,11,9,10,9,11,11,9,11,12,12,12,9,10,7,8,9,11,10,7,8,9,11,12,10,7,8,9,11,12,10,7,8,9,11,12,12,9,11,11],"f":[null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[],["error",4]],[[]],[[["str",15]],[["handler",3],["result",4],["error",4]]],null,null,[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[["paerr",3]]],[[]],[[]],[[]],null,null,[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[["operation",3],["sized",8]],[["result",4],["error",4]]],null,null,null,null,[[]],[[]],[[]],[[]],[[],[["result",4],["controllererror",4]]],[[],[["result",4],["controllererror",4]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[]],[[]],[[["u32",15]],[["controllererror",4],["result",4]]],[[["u32",15]],[["applicationinfo",3],["controllererror",4],["result",4]]],[[["u32",15]],[["applicationinfo",3],["controllererror",4],["result",4]]],[[],[["controllererror",4],["result",4]]],[[],[["result",4],["controllererror",4],["deviceinfo",3]]],[[],[["result",4],["controllererror",4],["deviceinfo",3]]],[[["u32",15]],[["controllererror",4],["result",4]]],[[["u32",15]],[["result",4],["controllererror",4],["deviceinfo",3]]],[[["u32",15]],[["result",4],["controllererror",4],["deviceinfo",3]]],[[["str",15]],[["controllererror",4],["result",4]]],[[["str",15]],[["result",4],["controllererror",4],["deviceinfo",3]]],[[["str",15]],[["result",4],["controllererror",4],["deviceinfo",3]]],[[],[["result",4],["controllererror",4],["serverinfo",3]]],[[],[["result",4],["controllererror",4],["serverinfo",3]]],null,null,[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[["u32",15],["f64",15]]],[[]],[[]],[[],[["result",4],["controllererror",4],["vec",3]]],[[],[["result",4],["vec",3],["controllererror",4]]],[[],[["result",4],["vec",3],["controllererror",4]]],[[],[["result",4],["controllererror",4],["vec",3]]],[[],[["vec",3],["controllererror",4],["result",4]]],[[],[["vec",3],["controllererror",4],["result",4]]],[[["u32",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15],["str",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15],["str",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15],["str",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15],["bool",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15],["bool",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15],["bool",15]],[["result",4],["bool",15],["controllererror",4]]],[[["str",15]],[["result",4],["bool",15],["controllererror",4]]],[[["str",15]],[["result",4],["bool",15],["controllererror",4]]],[[["str",15]],[["result",4],["bool",15],["controllererror",4]]],[[["u32",15],["bool",15]]],[[["u32",15],["bool",15]]],[[["u32",15],["bool",15]]],[[["bool",15],["str",15]]],[[["bool",15],["str",15]]],[[["bool",15],["str",15]]],[[["u32",15],["channelvolumes",3]]],[[["u32",15],["channelvolumes",3]]],[[["u32",15],["channelvolumes",3]]],[[["str",15],["channelvolumes",3]]],[[["str",15],["channelvolumes",3]]],[[["str",15],["channelvolumes",3]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,[[],["deviceportinfo",3]],[[],["devstate",4]],[[],["flags",4]],[[],["deviceinfo",3]],[[],["applicationinfo",3]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,null,[[["devstate",4]],["bool",15]],null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],null,null,[[]],[[["sourceportinfo",3]]],[[["box",3]]],[[["sinkportinfo",3]]],[[["box",3]]],[[]],[[["sinkstate",4]]],[[["sourcestate",4]]],[[]],[[]],[[["sourceinfo",3]]],[[["sinkinfo",3]]],[[["sourceoutputinfo",3]]],[[]],[[["sinkinputinfo",3]]],[[]],[[["serverinfo",3]]],null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null],"p":[[4,"Error"],[3,"Handler"],[3,"SinkController"],[3,"SourceController"],[8,"AppControl"],[8,"DeviceControl"],[4,"DevState"],[4,"Flags"],[3,"DeviceInfo"],[3,"DevicePortInfo"],[3,"ApplicationInfo"],[3,"ServerInfo"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};