function LinkText(props) {
  return (
    <div className="text-sm font-light text-[#6B7280]">
      {props.prefixText}{" "}
      <a href={props.link} className="font-medium text-[#4F46E5] hover:underline">
        {props.linkText}
      </a>
    </div>
  );
}

export default LinkText;
