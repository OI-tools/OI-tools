function register_tool(tool_obj, tool_fn, tool_params, tool_output) {
    tool_obj
      .find("input, textarea")
      .not("[readonly]")
      .on("input propertychange", function () {
        tool_output.val(tool_fn(tool_params));
      });
  }